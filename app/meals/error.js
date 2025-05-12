'use client';
export default function errorMeal({ error }) {
  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>
        We are unable to fetch the meals at this time. Please try again later.
      </p>
      <p>If the problem persists, please contact support.</p>
      <p>Thank you for your understanding.</p>
    </main>
  );
}
