import { useTranslations } from "next-intl";
import { Button } from "./button";
import { Link } from "@/i18n/routing";

type Props = {
  disabled?: boolean;
  label?: string;
  url: string;
  variant?: "nextPrimary" | "nextSecondary";
};

const NextButton = ({
  disabled = false,
  label,
  url,
  variant = "nextPrimary",
}: Props) => {
  const t = useTranslations("base");

  return (
    <div className="flex flex-col items-center">
      {disabled ? (
        <Button disabled variant={variant}>
          {label || t("next")}
        </Button>
      ) : (
        <Link href={url}>
          <Button variant={variant}>{label || t("next")}</Button>
        </Link>
      )}
    </div>
  );
};

export default NextButton;
