"use client";

import { LucideIcon } from "lucide-react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";

interface ToolButtonProps {
    lable: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
    isDisabled?: boolean;
}

export const ToolButton = ({
    lable,
    icon:Icon,
    onClick,
    isActive,
    isDisabled
}: ToolButtonProps) => {
    return (
        <Hint lable={lable} side="right" sideOffset={14}>
            <Button
            disabled={isDisabled}
            onClick={onClick}
            size="icon"
            variant={isActive ? "boardActive" : "board"}
            >
                <Icon />
            </Button>
        </Hint>
    )
}