import { useMutation } from "@tanstack/react-query";
import { api, type LeadInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: LeadInput) => {
      const validated = api.leads.create.input.parse(data);
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.leads.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit form. Please try again.');
      }
      
      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "✨ Welcome to Maximize!",
        description: "We've received your information and will be in touch soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Oops!",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
