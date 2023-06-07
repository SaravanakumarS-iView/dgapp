import { SafeAreaView } from 'react-native'
import GenreList from './screens/GenreList/GenreList'
import { styles } from './style';

function App() {

  return (
    <SafeAreaView style={styles.container}>
      <GenreList />
    </SafeAreaView>
  );
}

export default App;
