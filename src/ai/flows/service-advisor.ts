'use server';

/**
 * @fileOverview An AI service advisor flow that recommends the most suitable maintenance package for a company's needs.
 *
 * - recommendServicePackage - A function that recommends a service package based on business needs.
 * - RecommendServicePackageInput - The input type for the recommendServicePackage function.
 * - RecommendServicePackageOutput - The return type for the recommendServicePackage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendServicePackageInputSchema = z.object({
  businessType: z
    .string()
    .describe('The type of business (e.g., law firm, design agency, retail store).'),
  numberOfComputers: z
    .number()
    .int()
    .describe('The number of computers the business uses.'),
  criticalityOfComputers: z
    .string()
    .describe(
      'How critical are computers to the business operations? (e.g., very critical, somewhat critical, not critical)'
    ),
});
export type RecommendServicePackageInput = z.infer<typeof RecommendServicePackageInputSchema>;

const RecommendServicePackageOutputSchema = z.object({
  recommendedPackage: z
    .string()
    .describe('O nome do pacote de serviços recomendado.'),
  packageDescription: z
    .string()
    .describe('Uma descrição detalhada do pacote de serviços recomendado e por que ele é adequado.'),
});
export type RecommendServicePackageOutput = z.infer<typeof RecommendServicePackageOutputSchema>;

export async function recommendServicePackage(
  input: RecommendServicePackageInput
): Promise<RecommendServicePackageOutput> {
  return recommendServicePackageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendServicePackagePrompt',
  input: {schema: RecommendServicePackageInputSchema},
  output: {schema: RecommendServicePackageOutputSchema},
  prompt: `Você é um consultor de serviços de IA especializado em recomendar os pacotes de manutenção de TI mais adequados para empresas.

  Baseado nas seguintes informações sobre o negócio, recomende um dos seguintes pacotes:

  - Básico: Inclui manutenção e suporte essenciais.
  - Intermediário: Inclui manutenção regular, suporte e segurança básica.
  - Premium: Inclui manutenção abrangente, suporte, segurança avançada e serviço prioritário.

  Tipo de Negócio: {{{businessType}}}
  Número de Computadores: {{{numberOfComputers}}}
  Criticidade dos Computadores: {{{criticalityOfComputers}}}

  Explique por que o pacote é uma boa opção para o negócio com base em suas necessidades.

  Garanta que a resposta seja sempre em português do Brasil.

  Certifique-se de que os campos recommendedPackage e packageDescription sejam preenchidos corretamente na saída.`,
});

const recommendServicePackageFlow = ai.defineFlow(
  {
    name: 'recommendServicePackageFlow',
    inputSchema: RecommendServicePackageInputSchema,
    outputSchema: RecommendServicePackageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
