import fs from "fs";
import path from "path";
import { db } from "./db";
import { leads, type InsertLead, type Lead } from "@shared/schema";

const LEADS_FILE = path.resolve(import.meta.dirname, "..", "leads.json");

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
}

export class DatabaseStorage implements IStorage {
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db!.insert(leads).values(insertLead).returning();
    return lead;
  }
}

class FileStorage implements IStorage {
  private readLeads(): Lead[] {
    try {
      return JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
    } catch {
      return [];
    }
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const existing = this.readLeads();
    const lead: Lead = {
      id: (existing.length > 0 ? existing[existing.length - 1].id + 1 : 1),
      ...insertLead,
      message: insertLead.message ?? null,
      createdAt: new Date(),
    };
    existing.push(lead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(existing, null, 2));
    console.log("Lead saved to leads.json:", lead);
    return lead;
  }
}

export const storage: IStorage = db
  ? new DatabaseStorage()
  : new FileStorage();
