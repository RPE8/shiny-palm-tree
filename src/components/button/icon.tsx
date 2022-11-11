type Props = {
    src: string;
}

export default function Icon ({
    src,
}: Props) {
    return (
        <img src={src} alt={src} className="buttonIcon" />
    )
}