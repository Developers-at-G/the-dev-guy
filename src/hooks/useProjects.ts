import { useState, useMemo, useCallback } from 'react';

export type SortBy = 'project' | 'role' | 'team' | 'period' | 'highlight';
export type SortDirection = 'asc' | 'desc';

export interface Project {
  title: string;
  image: string;
  technologies: string[];
  link?: string;
  caseStudy?: string;
  githubUrl?: string;
  role: string;
  team: string;
  period: string;
  impacts?: string[];
  problem: string;
  actions: string[];
}

interface UseProjectsOptions {
  projects: Project[];
}

export const useProjects = ({ projects }: UseProjectsOptions) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sortBy, setSortBy] = useState<SortBy>('project');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const sortedProjects = useMemo(() => {
    const sorted = [...projects].sort((a, b) => {
      let valueA: string;
      let valueB: string;

      switch (sortBy) {
        case 'project':
          valueA = a.title.toLowerCase();
          valueB = b.title.toLowerCase();
          break;
        case 'role':
          valueA = a.role.toLowerCase();
          valueB = b.role.toLowerCase();
          break;
        case 'team':
          valueA = a.team.toLowerCase();
          valueB = b.team.toLowerCase();
          break;
        case 'period':
          valueA = a.period.toLowerCase();
          valueB = b.period.toLowerCase();
          break;
        case 'highlight':
          valueA = (a.impacts?.[0] || '').toLowerCase();
          valueB = (b.impacts?.[0] || '').toLowerCase();
          break;
        default:
          valueA = a.title.toLowerCase();
          valueB = b.title.toLowerCase();
      }

      const result = valueA.localeCompare(valueB);
      return sortDirection === 'asc' ? result : -result;
    });

    return sorted;
  }, [projects, sortBy, sortDirection]);

  const handleSort = useCallback((newSortBy: SortBy) => {
    if (sortBy === newSortBy) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortDirection('asc');
    }
  }, [sortBy]);

  const toggleProjectExpansion = useCallback((projectTitle: string) => {
    setExpandedProjects(prev => {
      const next = new Set(prev);
      if (next.has(projectTitle)) {
        next.delete(projectTitle);
      } else {
        next.add(projectTitle);
      }
      return next;
    });
  }, []);

  const isProjectExpanded = useCallback((projectTitle: string) => {
    return expandedProjects.has(projectTitle);
  }, [expandedProjects]);

  const selectProject = useCallback((index: number) => {
    if (index >= 0 && index < sortedProjects.length) {
      setSelectedIndex(index);
    }
  }, [sortedProjects.length]);

  const selectedProject = sortedProjects[selectedIndex] || null;

  return {
    sortedProjects,
    selectedProject,
    selectedIndex,
    sortBy,
    sortDirection,
    expandedProjects,
    handleSort,
    selectProject,
    toggleProjectExpansion,
    isProjectExpanded
  };
};
