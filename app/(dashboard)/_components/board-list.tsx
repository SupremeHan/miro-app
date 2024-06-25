"use client";

import { EmptyState } from "./empty-state";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  if (!data.length && query.search) {
    return (
      <EmptyState
        icon="/empty-search.svg"
        title="No results found!"
        description="Try searching for something else"
      />
    );
  }

  if (!data.length && query.favorites) {
    return (
      <EmptyState
        icon="/empty-favorites.svg"
        title="No favorite boards!"
        description="Try favoriting a board"
      />
    );
  }

  if (!data.length) {
    return (
      <EmptyState
        icon="/empty-board.svg"
        title="Create your first board"
        description="Start by creating a board for your first organization"
      />
    );
  }

  return <div>{JSON.stringify(query)}</div>;
};
