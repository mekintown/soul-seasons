import { useTranslations } from "next-intl";
import { Button } from "./button";
import { Link } from "@/i18n/routing";

type Props = {
  trigger?: boolean;
  label?: string;
  url: string;
};

const NextButton = ({ trigger = true, label, url }: Props) => {
  const t = useTranslations("base");
  return (
    <Link href={url}>
      <Button disabled={!trigger} variant="next" size="xl">
        <p>{label ? label : t("next")}</p>
      </Button>
    </Link>
  );
};

export default NextButton;
