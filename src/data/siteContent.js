import { BsCameraReels, BsStars, BsFilm, BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";

export const galleryItems = [
    {
        title: "Campaign Motion",
        type: "Music Video",
        image: "./assets/mv-bg.png",
    },
    {
        title: "Commercial Set",
        type: "TVC Production",
        image: "./assets/tvc-bg.png",
    },
    {
        title: "Viral Story Cut",
        type: "Digital Content",
        image: "./assets/viral-bg.png",
    },
    {
        title: "Behind The Frame",
        type: "Production Still",
        image: "./assets/director.jpg",
    },
    {
        title: "Visual Moodboard",
        type: "Creative Direction",
        image: "./assets/main-img.png",
    },
    {
        title: "Signature Shot",
        type: "Editorial Capture",
        image: "./assets/demo-thumb.jpg",
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
