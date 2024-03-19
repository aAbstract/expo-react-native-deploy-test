import { post_event } from '../lib/mediator';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

async function loadImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
    });

    if (!result.canceled) {
        post_event('change_image', {
            selectedImage: result.assets[0],
        });
    } else {
        alert('You did not select any image.');
    }
}

export default function Button({ label }) {


    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={loadImage}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#000',
        fontSize: 16,
    },
});