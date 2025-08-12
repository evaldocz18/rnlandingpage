/**
 * @fileOverview Service for fetching Google Places API data.
 */
import { z } from 'zod';

const ReviewSchema = z.object({
  author_name: z.string(),
  author_url: z.string().url(),
  profile_photo_url: z.string().url(),
  rating: z.number().int().min(1).max(5),
  text: z.string(),
  relative_time_description: z.string(),
});

const PlaceDetailsSchema = z.object({
  result: z.object({
    reviews: z.array(ReviewSchema),
  }),
  status: z.string(),
});

export type GoogleReview = z.infer<typeof ReviewSchema>;

export async function getGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    throw new Error('Google Maps API key or Place ID is not configured.');
  }
    
  if (apiKey === 'SUA_CHAVE_DE_API_VAI_AQUI') {
    console.warn("Usando dados de avaliação de exemplo. Adicione sua GOOGLE_MAPS_API_KEY ao arquivo .env para buscar dados reais.");
    return mockReviews;
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=pt_BR&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const parsedData = PlaceDetailsSchema.safeParse(data);

    if (!parsedData.success || parsedData.data.status !== 'OK') {
      console.error('Failed to parse Google Places API response:', parsedData.error);
      throw new Error(`Google Places API Error: ${data.status} ${data.error_message || ''}`);
    }

    return parsedData.data.result.reviews;
  } catch (error) {
    console.error('Error fetching reviews from Google Places API:', error);
    throw new Error('Could not fetch Google reviews.');
  }
}

// Dados de exemplo para usar caso a API não esteja configurada.
const mockReviews: GoogleReview[] = [
    {
      author_name: "Dayane Franco",
      author_url: "https://www.google.com/maps/contrib/110856948386333917887/reviews",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/AOh14GgQc_F-d1G2mSAI4eXAP-D_2aVxr_p-gYjXo1Y_Zw=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      text: "Recebi por indicação o serviço desta empresa Repare notebooks, e foi muito bem recebida pelo profissional. Serviço de qualidade, profissional prestativo e detalhista em todas as informações do serviço prestado. Super recomendo seus serviços, faça você também seu orçamento com quem realmente entende do assunto.",
      relative_time_description: "há um mês"
    },
    {
      author_name: "Vitor Ramon",
      author_url: "https://www.google.com/maps/contrib/105740398686256221849/reviews",
      profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocK_pOF-z_je_E3hTf4E_tWpYdbyCj_l8f7H_qY=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      text: "Profissional honesto e que realmente entende do que faz. Super atencioso, explicou tudo com clareza e passou confiança. Durante o conserto, me manteve informado e só fez o que autorizei. Recomendo demais!",
      relative_time_description: "há 2 meses"
    },
    {
      author_name: "Hortência Natália",
      author_url: "https://www.google.com/maps/contrib/104101494292160651152/reviews",
      profile_photo_url: "https://lh3.googleusercontent.com/a-/AOh14GhJ1X3sY0z-pYJ3nJ-9lJqX9XvB8K_O5e3aO6w=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      text: "Excelente serviço! Foram muito profissionais desde o primeiro contato. Atendimento rápido e atencioso, diagnóstico preciso e conserto realizado com eficiência. Meu notebook voltou funcionando perfeitamente, e o prazo foi cumprido direitinho. Recomendo para quem busca qualidade, confiança e bom preço!",
      relative_time_description: "há 4 meses"
    }
];
