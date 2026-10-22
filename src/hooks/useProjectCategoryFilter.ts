'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { ProjectCategory } from '@/types/project';

export type ProjectFilter = ProjectCategory | 'all';

function isCategory(value: string | null): value is ProjectFilter {
  return (
    value === 'all' ||
    value === 'fullstack' ||
    value === 'frontend' ||
    value === 'learning'
  );
}

/** Keeps library filter in sync with `?category=` for shareable / deep links. */
export function useProjectCategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramCategory = searchParams.get('category');

  const [filter, setFilter] = useState<ProjectFilter>(
    isCategory(paramCategory) ? paramCategory : 'all'
  );

  useEffect(() => {
    if (isCategory(paramCategory)) setFilter(paramCategory);
  }, [paramCategory]);

  const setCategory = (id: ProjectFilter) => {
    setFilter(id);
    const params = new URLSearchParams(searchParams.toString());
    if (id === 'all') params.delete('category');
    else params.set('category', id);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return { filter, setCategory };
}
