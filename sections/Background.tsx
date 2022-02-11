import s from "@styles/sections/Background.module.sass"
import { useIntl } from "react-intl"

type BackgroundComponent = {
  videoUrl: string
  posterUrl?: string
}

const Background: React.FC<BackgroundComponent> = ({ videoUrl, posterUrl }) => {
  const intl = useIntl()

  return (
    <section className={s.wrapper}>
      <video poster={posterUrl} loop autoPlay muted>
        <source src={videoUrl} type="video/mp4" />
        {intl.formatMessage({
          defaultMessage: "Your browser does not support the video tag.",
        })}
      </video>
    </section>
  )
}

export default Background
