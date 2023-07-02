export const scrollTo = (sessionId?: string): void => {
  if(sessionId) {
    const element = document.getElementById(sessionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}