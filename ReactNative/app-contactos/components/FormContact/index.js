import { useCallback, useContext, useEffect, useState } from "react"
import { Button, SafeAreaView, Text, TextInput, View } from "react-native"
import { Input } from '@rneui/themed';
import HomeContext from "../../services/HomeContext";

import contactService from "../../services/contacts";


export default ({navigation}) => {

    const [contact, setContact] = useState({})
    const [notValid, setNotValid] = useState(true)

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
        // addContact(contact)

        console.log(contactService);

        contactService.addContact(contact).then(res => {
            console.log(res);
            navigation.goBack()
        })
    }
    return (
        <SafeAreaView>
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
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button
                    title="Save"
                    onPress={saveContact}
                    disabled={notValid}
                />
                <Button
                    title="Cancel"
                    onPress={() => navigation.goBack() }
                />
            </View>
            
        </SafeAreaView>

    )
}