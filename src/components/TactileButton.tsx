import React from "react";
import { sound } from "../utils/audio";

export interface TactileButtonProps {
  variant?: "primary" | "secondary" | "up" | "down" | "outline" | "arcade";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  title?: string;
}

export function TactileButton({
  variant = "primary",
  size = "md",
  children,
  icon,
  fullWidth = false,
  className = "",
  disabled,
  onClick,
  ...props
}: TactileButtonProps) {
  // Styles based on variant
  let colorClasses = "bg-[#FF6A00] text-black border-black hover:bg-[#FF8533]";
  let shadowClass = "shadow-[3px_3px_0px_#000000]";
  let activeTransform = "active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000]";

  if (variant === "secondary") {
    colorClasses = "bg-[#1C1822] text-[#FDFBF7] border-[#2E2638] hover:border-[#FF6A00]/50 hover:bg-[#25202D]";
    shadowClass = "shadow-[3px_3px_0px_#000000]";
  } else if (variant === "up") {
    colorClasses = "bg-[#00F5D4] text-black border-black hover:bg-[#38FFDF]";
    shadowClass = "shadow-[3px_3px_0px_#000000]";
  } else if (variant === "down") {
    colorClasses = "bg-[#FF007F] text-white border-black hover:bg-[#FF3399]";
    shadowClass = "shadow-[3px_3px_0px_#000000]";
  } else if (variant === "outline") {
    colorClasses = "bg-transparent text-[#FDFBF7] border-2 border-[#2E2638] hover:border-[#FF6A00] hover:text-[#FF6A00]";
    shadowClass = "shadow-[2px_2px_0px_#000000]";
  } else if (variant === "arcade") {
    colorClasses = "bg-[#FFD23F] text-black border-2 border-black hover:bg-[#FFE066]";
    shadowClass = "shadow-[4px_4px_0px_#000000]";
  }

  let sizeClasses = "px-4 py-2 text-xs";
  if (size === "sm") sizeClasses = "px-3 py-1.5 text-[11px]";
  if (size === "lg") sizeClasses = "px-6 py-3 text-sm";
  if (size === "xl") sizeClasses = "px-8 py-4 text-base";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      if (variant === "arcade") {
        sound.playCoin();
      } else {
        sound.playClick();
      }
      if (onClick) {
        onClick(e);
      }
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`
        relative inline-flex items-center justify-center gap-2 rounded-lg font-heading font-black tracking-wide uppercase
        border-2 transition-all duration-100 select-none
        ${colorClasses}
        ${shadowClass}
        ${!disabled ? activeTransform : "opacity-40 cursor-not-allowed"}
        ${sizeClasses}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
