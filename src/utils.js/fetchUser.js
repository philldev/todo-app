import Axios from "axios";

const fetchUser = async (setLoading, setUser, history, source) => {
  const authToken = localStorage.getItem("AuthToken");
  

  try {
    Axios.defaults.headers.common = { Authorization: `${authToken}` };

    const response = await Axios.get("https://us-central1-todoapp-fb5c3.cloudfunctions.net/api/user", {
      cancelToken: source.token
    });
    const data = await response.data.userCredentials;

    setUser(data)
    setLoading(false)

    
  } catch (error) {
    console.log(error);
    if ( error ) {
      history.push('/login');
    }
    setLoading(false)
  }
};

export default fetchUser;
