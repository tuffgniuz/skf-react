const BASE_URL = "https://demo.securityknowledgeframework.org/api";

export const fetchSKFCourse = async () => {
  const response = await fetch(
    "https://demo.securityknowledgeframework.org/api/training/course/1.1"
  );
  const data = await response.json();

  return data;
};
