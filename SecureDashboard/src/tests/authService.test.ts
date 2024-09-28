import { signIn } from "../services/authService";
import axios from "axios";


jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("signIn service calls API with correct payload", async () => {
  mockedAxios.post.mockResolvedValue({ data: { token: "fake-token" } });
  const response = await signIn("test@example.com", "password123");
  expect(mockedAxios.post).toHaveBeenCalledWith("https://reqres.in/api/login", {
    email: "test@example.com",
    password: "password123",
  });
  expect(response.data.token).toBe("fake-token");
});
