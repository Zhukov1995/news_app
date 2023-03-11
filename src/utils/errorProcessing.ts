
export const errorProcessing = (e: any) => {
    if (typeof e === "string") {
      e.toUpperCase()
  } else if (e instanceof Error) {
      console.log(e.message);
  }
} 