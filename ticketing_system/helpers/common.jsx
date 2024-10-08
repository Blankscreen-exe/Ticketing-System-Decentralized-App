
// Function to convert date string to Unix timestamp
export const convertDateToTimestamp = (dateString) => {
    // Parse the date string and create a Date object
    const dateObject = new Date(dateString);
  
    // Get the Unix timestamp (milliseconds since January 1, 1970)
    const timestamp = dateObject.getTime();
  
    // Convert to seconds (Unix timestamps in Ethereum are usually in seconds)
    const timestampInSeconds = Math.floor(timestamp / 1000);
  
    return timestampInSeconds;
  };

// Function to convert Unix timestamp to date string
export const convertTimestampToDate = (timestamp) => {
    // Convert the timestamp to milliseconds
    const timestampInMillis = timestamp * 1000;
  
    // Create a new Date object
    const dateObject = new Date(timestampInMillis);
  
    // Use Date methods to get the components of the date
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(dateObject.getDate()).padStart(2, '0');
    
    // Construct the date string in the format "YYYY-MM-DD" or customize it as needed
    const dateString = `${year}-${month}-${day}`;
  
    return dateString;
  };
  
export const appLogger = (msg = "", data = "") => {
  // Create a new Error object to capture the call stack
  const error = new Error();

  // Extract the stack trace information
  const stackTrace = error.stack?.split('\n').slice(2).join('\n'); // Remove the first two lines

  console.log(
    `%c=== ${msg} ===`,
    "color:red; font-weight:bold; font-size:12px"
  );
  // Array.isArray(data) || JSON.isObject(data)
  // ? console.log(
  //   `%c=== ${{...data}} ===`,
  //   "color:red; font-weight:bold; font-size:12px"
  //  )
  // : console.log(
  //   `%c=== ${data} ===`,
  //   "color:red; font-weight:bold; font-size:12px"
  //  )
   console.log(
    `%c=== ${data} ===`,
    "color:red; font-weight:bold; font-size:12px"
   )
  console.log("stack trace", stackTrace);
}
