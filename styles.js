import { FontAwesome } from "@expo/vector-icons";

const styles = {
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#4fd68c8b",
    padding: 20,
  },
  errorText: {
    color: "red",
    fontSize: 23,
    marginTop: 10,
  },
  heading: {
    fontSize: 30,
    marginBottom: 23,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "Roboto",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 21,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    marginLeft: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  resultsContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    padding: 20,
    height: 300,
  },
  word: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  playButton: {
    backgroundColor: "#2ecc71",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  playButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  resultText: {
    fontSize: 15,
    marginBottom: 10,
  },
  clearButton: {
    backgroundColor: "#ff4a4a",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
  },
  clearButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    flex: 1,
  },
};
export default styles;