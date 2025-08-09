// src/bootstrap.ts
if (process.env.REACT_APP_ENV !== "production") {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/react-scan/dist/auto.global.js";
    script.async = false; // important: block React until react-scan loads
    script.onload = () => {
        import('./main'); // defer loading the actual app
    };
    document.head.appendChild(script);
} else {
    import('./main'); // in production, skip scan
}