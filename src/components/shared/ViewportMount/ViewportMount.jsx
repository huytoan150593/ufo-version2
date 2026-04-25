import React from "react";
import { useInView } from "react-intersection-observer";

const ViewportMount = ({
    children,
    fallback = null,
    rootMargin = "320px 0px",
    triggerOnce = true,
    minHeight = null,
}) => {
    const { ref, inView } = useInView({
        rootMargin,
        triggerOnce,
    });

    return (
        <div ref={ref} style={minHeight ? { minHeight } : undefined}>
            {inView ? children : fallback}
        </div>
    );
};

export default ViewportMount;
