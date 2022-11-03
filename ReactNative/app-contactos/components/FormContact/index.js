import { useCallback, useContext, useEffect, useState } from "react"
import { Button, SafeAreaView, Text, TextInput, View } from "react-native"
import { Input } from '@rneui/themed';
import HomeContext from "../../services/HomeContext";

export default () => {

    const [contact, setContact] = useState({})
    const [notValid, setNotValid] = useState(true)

    const { addContact } = useContext(HomeContext)

    useEffect(useCallback(() => {
        const isValid = (
            contact.nombreCompleto && 
            contact.telefono &&
            contact.edad
        )
        // console.log("Detecto cambio de valor: ", contact, isValid);
        setNotValid(!isValid)
    }), [contact])

    const saveContact = () => {
        console.log("Click en boton guardar contacto");
        // TODO: Limpiar campos
        addContact(contact)
    }
    return (
        <SafeAreaView>
            <View>
                <Text>Contact Form</Text>
            </View>
            <View>
                <Input
                    placeholder="Nombre"
                    value={contact.nombreCompleto}
                    // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={text => setContact({ ...contact, nombreCompleto: text })}
                />
                <Input
                    placeholder="Telefono"
                    value={contact.telefono}
                    // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={text => setContact({ ...contact, telefono: text })}
                    keyboardType='number-pad'
                />
                <Input
                    placeholder="Edad"
                    value={contact.edad}
                    // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={text => setContact({ ...contact, edad: text })}
                    keyboardType='phone-pad'
                />
            </View>

            <Button
            title="Save Contact"
            onPress={saveContact}
            disabled={notValid}
             />
        </SafeAreaView>

    )
}