import {
    BsCameraReels,
    BsStars,
    BsFilm,
    BsEnvelope,
    BsGeoAlt,
    BsTelephone,
    BsCamera,
    BsImages,
    BsPersonBadge,
    BsMusicNoteBeamed,
} from "react-icons/bs";

export const galleryItems = [
    {
        title: "Bradbury Echo",
        type: "Architecture",
        image: "./assets/mv-bg.png",
        variant: "tall",
        tone: "mono",
    },
    {
        title: "Late Night Table Read",
        type: "On Set",
        image: "./assets/tvc-bg.png",
        variant: "wide",
        tone: "warm",
    },
    {
        title: "Quiet Character",
        type: "Portrait",
        image: "./assets/talent/hao-bg.jpg",
        variant: "small",
        tone: "soft",
    },
    {
        title: "Neon Camera Team",
        type: "Crew",
        image: "./assets/director.jpg",
        variant: "medium",
        tone: "neon",
    },
    {
        title: "Window Light",
        type: "Beauty",
        image: "./assets/talent/hao-sq.jpg",
        variant: "wideShort",
        tone: "soft",
    },
    {
        title: "Blue Hour Pose",
        type: "Fashion",
        image: "./assets/talent/talent3.jpg",
        variant: "smallTall",
        tone: "cool",
    },
    {
        title: "Studio Attitude",
        type: "Editorial",
        image: "./assets/talent/talent1.jpg",
        variant: "smallTall",
        tone: "green",
    },
    {
        title: "Road Machine",
        type: "Lifestyle",
        image: "./assets/main-img.png",
        variant: "heroWide",
        tone: "neutral",
    },
    {
        title: "Purple Debrief",
        type: "Production",
        image: "./assets/viral-bg.png",
        variant: "small",
        tone: "neon",
    },
    {
        title: "Stairwell Pause",
        type: "Street",
        image: "./assets/talent/talent2.jpg",
        variant: "small",
        tone: "green",
    },
    {
        title: "Paper Room",
        type: "Concept",
        image: "./assets/demo-thumb.jpg",
        variant: "small",
        tone: "warm",
    },
    {
        title: "Night Window",
        type: "Mood",
        image: "./assets/director.jpg",
        variant: "small",
        tone: "green",
    },
    {
        title: "Studio White",
        type: "Clean Portrait",
        image: "./assets/talent/hao-sq.jpg",
        variant: "smallTall",
        tone: "clean",
    },
];

export const directors = [
    {
        name: "Luan Minh",
        role: "Director / Producer",
        focus: "Commercial films, artist collaborations, and production leadership.",
        description:
            "Founder of UFO Entertainment. Strongly focused on adaptable production leadership, commercial execution, and building crews that can move from concept to set with clarity.",
        detail:
            "Has participated in film, TVC, and viral projects both domestically and internationally, contributing across PM, AD, producer, and camera roles.",
        image: "./assets/director.jpg",
        signature: "./assets/sign.png",
        icon: BsCameraReels,
    },
    {
        name: "Leon Le",
        role: "Writer / Director",
        focus: "Narrative storytelling, performance direction, and emotionally driven cinema.",
        description:
            "A storytelling-led voice with deep sensitivity to performance, dramatic pacing, and visual tone across feature and short-form work.",
        detail:
            "Brings a strong authorial point of view useful for narrative branded content, music videos, and cinematic campaign treatments.",
        icon: BsFilm,
    },
    {
        name: "Creative Unit",
        role: "Concept + Visual Team",
        focus: "Pitch frames, treatments, visual references, and set-world development.",
        description:
            "A compact cross-functional unit supporting concept development, visual references, and look-building before production begins.",
        detail:
            "Useful when projects need fast alignment between creative direction, pre-production planning, and execution tone.",
        icon: BsStars,
    },
];

export const actors = [
    {
        id: "hoang-gia-hao",
        name: "Hoang Gia Hao",
        role: "Photographer",
        specialty: "Creator / Editorial / Lifestyle",
        description:
            "Works well for youth-driven campaigns that need an observant look, lifestyle framing, and soft-spoken screen confidence with a creator energy.",
        image: "./assets/talent/hao-bg.jpg",
        avatar: "./assets/talent/hao-sq.jpg",
        stageImage: "./assets/talent/hao-bg.jpg",
        icon: BsCamera,
        tags: ["Creator", "Editorial", "Lifestyle"],
    },
    {
        id: "tom-le",
        name: "Tom Le",
        role: "Model",
        specialty: "Portrait / Fashion / Character Framing",
        description:
            "A strong fit for portrait-led campaigns, fashion-adjacent visuals, and gentle urban storytelling that relies on expression and frame presence.",
        image: "./assets/talent/talent1.jpg",
        avatar: "./assets/talent/talent1.jpg",
        stageImage: "./assets/talent/talent1.jpg",
        icon: BsImages,
        tags: ["Model", "Portrait", "Fashion"],
    },
    {
        id: "lien-binh-phat",
        name: "Lien Binh Phat",
        role: "Secret man",
        specialty: "Narrative / Branded Content",
        description:
            "Best used when the direction needs a sharper, more mysterious screen profile with strong silhouette, attitude, and confidence in close framing.",
        image: "./assets/talent/talent2.jpg",
        avatar: "./assets/talent/talent2.jpg",
        stageImage: "./assets/talent/talent2.jpg",
        icon: BsStars,
        tags: ["Actor", "Attitude", "Cinematic"],
    },
    {
        id: "tran-dai-nghia",
        name: "Tran Dai Nghia",
        role: "Actor",
        specialty: "TVC / Digital Campaign",
        description:
            "Useful for emotional youth storytelling and music-led visuals where the face has to carry sensitivity, softness, and a reflective mood.",
        image: "./assets/talent/talent3.jpg",
        avatar: "./assets/talent/talent3.jpg",
        stageImage: "./assets/talent/talent3.jpg",
        icon: BsPersonBadge,
        tags: ["Actor", "Narrative", "Music Video"],
    },
    {
        id: "ms-ngoc-kayla",
        name: "Ms Ngoc Kayla",
        role: "Model",
        specialty: "Music Video / Lifestyle / Editorial",
        description:
            "A strong option for glossy pop visuals, beauty setups, and fashion-forward compositions that need clear star presence on frame.",
        image: "./assets/talent/hao-sq.jpg",
        avatar: "./assets/talent/hao-sq.jpg",
        stageImage: "./assets/talent/hao-bg.jpg",
        icon: BsMusicNoteBeamed,
        tags: ["Model", "Beauty", "Performance"],
    },
];

export const contactItems = [
    {
        title: "Email",
        subtitle: "Project Inquiries",
        meta: "hello@ufo-entertainment.vn",
        description: "Send treatments, campaign briefs, or early production questions for a fast first pass.",
        icon: BsEnvelope,
    },
    {
        title: "Phone",
        subtitle: "Production Desk",
        meta: "+84 28 0000 0000",
        description: "Use the main line when a timeline, crew, or on-set coordination discussion needs to move quickly.",
        icon: BsTelephone,
    },
    {
        title: "Studio",
        subtitle: "Saigon, Vietnam",
        meta: "District 1 creative district",
        description: "The team works across music video, TVC, branded storytelling, and production partnerships.",
        icon: BsGeoAlt,
    },
];
