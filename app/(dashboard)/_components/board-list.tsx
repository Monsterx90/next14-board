"use client"


import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import { EmptyBoard} from "./empty-board";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { BoardCard } from "./board-card";
import { NewBoardButton } from "./new-board-button";



interface BoardListProps {
    orgId: string;
    query: {
        search?: string,
        favorites?: string,
    }
}


export const BoardList = ({orgId, query} : BoardListProps) => {
    const data = useQuery(api.boards.get , {orgId , ...query}); // change to api call

    if (data === undefined) {
        return(
        <div>
            <h2 className="text-3xl" >
                {query.favorites ? "Favorites boards" : "Team Boards"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 pb-10 mt-8">
                <NewBoardButton orgId={orgId} disabled/>
                <BoardCard.Skeleton/>
                <BoardCard.Skeleton/>
                <BoardCard.Skeleton/>
                <BoardCard.Skeleton/>
                <BoardCard.Skeleton/>
                <BoardCard.Skeleton/>
            </div>
        </div>
        )
    }

    if(!data.length && query.search) {
        return <EmptySearch />
    }

    if(!data.length && query.favorites) {
        return <EmptyFavorites/>
    }

    if(!data.length) {
        return <EmptyBoard/>
    }

    return (
        <div>
        <h2 className="text-3xl" >
            {query.favorites ? "Favorites boards" : "Team Boards"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 pb-10 mt-8">
            <NewBoardButton orgId={orgId}/>
            {data?.map((board) => (
                <BoardCard 
                key={board._id}
                id={board._id}
                title={board.title}
                imageUrl={board.imageUrl}
                authorId={board.authorId}
                authorName={board.authorName} 
                creatredAt={board._creationTime}
                orgId={board.orgId}
                isFavorite={board.isFavorite}
            />
            ))}
            
        </div>

        </div>
    )
}