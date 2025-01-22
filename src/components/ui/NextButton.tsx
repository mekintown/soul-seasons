import { useTranslations } from "next-intl";
import { Button } from "./button";
import { Link } from "@/i18n/routing";

type Props = {
  disabled?: boolean;
  label?: string;
  url: string;
};

const NextButton = ({ disabled = false, label, url }: Props) => {
  const t = useTranslations("base");

  if (disabled) {
    return (
      <div>
        <Button disabled={true} variant="next" size="xl">
          <p>{label ? label : t("next")}</p>
        </Button>
      </div>
    );
  }

  return (
    <Link href={url}>
      <Button disabled={false} variant="next" size="xl">
        <p>{label ? label : t("next")}</p>
      </Button>
    </Link>
  );
};

export default NextButton;
