
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { fetchGoogleReviews } from "@/app/actions";
import type { GoogleReview } from "@/services/google-reviews";

const Rating = ({ value }: { value: number }) => (
  <div className="flex items-center gap-0.5 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < value ? 'fill-current' : ''}`} />
    ))}
  </div>
);

export function SocialProof() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        const result = await fetchGoogleReviews();
        if (result.error) {
          setError(result.error);
        } else {
          // Pegar apenas as 3 primeiras avaliações para exibir
          setReviews(result.data?.slice(0, 3) || []);
        }
      } catch (err) {
        setError("Ocorreu um erro inesperado ao carregar as avaliações.");
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`;
    }
    return names[0][0];
  }

  return (
    <section className="w-full py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground/80">
            Construímos relações de confiança, e nossos mais de 50 clientes com avaliações 5 estrelas no Google são a prova disso.
          </p>
        </div>
        
        {loading && (
          <div className="flex justify-center items-center mt-12">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        )}

        {error && !loading && (
           <div className="text-center mt-12 text-destructive bg-destructive/10 p-4 rounded-md">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {reviews.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="pt-6 flex-grow flex flex-col">
                  <p className="text-foreground/90 flex-grow">"{testimonial.text}"</p>
                  <div className="mt-6">
                     <Rating value={testimonial.rating} />
                     <div className="flex items-center gap-4 mt-4">
                          <Avatar>
                              <AvatarImage src={testimonial.profile_photo_url} alt={testimonial.author_name} />
                              <AvatarFallback>{getInitials(testimonial.author_name)}</AvatarFallback>
                          </Avatar>
                          <div>
                              <p className="font-semibold font-headline">{testimonial.author_name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.relative_time_description}</p>
                          </div>
                      </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="https://maps.app.goo.gl/xFSWuLvhWgaok2Vi6" target="_blank" rel="noopener noreferrer">
                    Ver mais de 50 avaliações no Google
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
