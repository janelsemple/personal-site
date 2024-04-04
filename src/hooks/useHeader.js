import { useState, useEffect } from 'react';

const useScrollVisibility = (scrollRef) => {
  // Determine initial visibility based on window width
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(window.innerWidth <= 1025)
    const handleScroll = () => {
      // Ensure the ref is current and the scroll event is applicable
      if (scrollRef.current) {
        let currentScroll = scrollRef.current.scrollTop;

        // Header is visible if screen width is <= 1025px and it's not scrolled all the way to the top
        const shouldBeVisible = window.innerWidth <= 1025 && currentScroll > 0;

        setIsVisible(shouldBeVisible);
      }
    };

    const handleResize = () => {
      // Adjust visibility based on window width during resize
      const shouldBeVisible = window.innerWidth <= 1025 && (scrollRef.current?.scrollTop > 0);
      setIsVisible(shouldBeVisible);
    };

    // Attach the scroll and resize event listeners
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("resize", handleResize);

    // Clean up the event listeners
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollRef]);

  return isVisible;
};

export default useScrollVisibility;
