'use client';
export default function errorMeal({ error }) {
  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>
        Failed to share your meal. Please check the following:
        <ul>
          <li>Ensure all fields are filled out correctly.</li>
          <li>Check if the image is valid and not too large.</li>
          <li>Make sure your email address is valid.</li>
        </ul>
      </p>
      <p>If the problem persists, please contact support.</p>
      <p>Thank you for your understanding.</p>
    </main>
  );
}
