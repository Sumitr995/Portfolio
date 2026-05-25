import { useEffect, useRef, useState } from 'react';
import { getRandomQuote } from '@/Utils/Qoutes';

const Qoutes = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const didFetchRef = useRef(false);

  useEffect(() => {
    if (didFetchRef.current) return;
    didFetchRef.current = true;

    let cancelled = false;

    (async () => {
      const quote = await getRandomQuote();
      if (!cancelled) setCurrentQuote(quote);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!currentQuote) return null;

  return (
    <div className="w-full px-4 md:px-0 md:w-1/2 md:max-w-3xl md:m-auto py-10">
      <div className="relative overflow-hidden rounded-xl border bg-background p-6">
        <svg
          aria-hidden="true"
          width="105"
          height="78"
          viewBox="0 0 105 78"
          className="pointer-events-none absolute top-6 left-6 -scale-x-100 fill-zinc-100 dark:fill-white/20"
        >
          <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
        </svg>

        <div className="relative pl-8 sm:pl-10">
          <p className="text-base sm:text-lg leading-relaxed font-mono italic text-foreground">
            “{currentQuote.quote}”
          </p>

          <p className="mt-5 text-right text-xs sm:text-sm font-mono italic text-muted-foreground">
            — {currentQuote.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qoutes;