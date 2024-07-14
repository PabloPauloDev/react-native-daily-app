import { View, Text, ScrollView } from "react-native"
import Constants from 'expo-constants'

const statusBarHeight = Constants.statusBarHeight;

const Home = () => {
    return (
        <>
            <ScrollView>
                <View 
                className='px-10'
                style={{ marginTop: statusBarHeight + 8 }}
                >
                    <Text>Teste</Text>
                </View>
            </ScrollView>
        </>
    )
}

export default Home;