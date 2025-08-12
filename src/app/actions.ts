'use server';

import { getGoogleReviews } from '@/services/google-reviews';

export async function fetchGoogleReviews() {
  try {
    const reviews = await getGoogleReviews();
    return { data: reviews, error: null };
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return { data: [], error: 'Não foi possível carregar as avaliações do Google. Tente novamente mais tarde.' };
  }
}
