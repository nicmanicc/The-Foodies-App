import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import Link from 'next/link';
import { getAllMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function MealsComp() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />;
}

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
        <p className={classes.cta}>
          <Link href="/meals/new">Share a Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <MealsComp />
        </Suspense>
      </main>
    </>
  );
}
