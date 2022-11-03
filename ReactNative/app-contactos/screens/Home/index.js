import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import styles from "./styles";

import contactService from "../../services/contacts";
import ContactScrollView from '../../components/ContactScrollView';
import { useEffect, useState } from 'react';
import ContactFlatList from '../../components/ContactFlatList';
import Details from '../Details';
import HomeContext, { contacts } from '../../services/HomeContext';



export default function Home() {

    const [contacts, setContacts] = useState(contacts)
    const [showForm, setShowForm] = useState(false)

    const addContact = (item) => {
        console.log("Tenemos que agregar contacto", item);
        setContacts([...contacts, item])
        setShowForm(false)
    }
    
    useEffect(() => {
        // Se supone que acá tengo que ir a buscar la informacion en la API
        // fetch contactos
        contactService.getContacts().then(data => {
            setContacts(data)
        })

    }, [])

    return (

        <HomeContext.Provider value={ { addContact }}>
            <View style={styles.container}>
                <Button
                    title={(showForm) ? 'Back to List' : 'Add new Contact'}
                    onPress={() => setShowForm(prev => !prev)}
                />
                {
                    (showForm) ?
                        <Details />
                        :
                        <View>
                            {/* <ContactScrollView contacts={contacts} /> */}
                            <ContactFlatList contacts={contacts} />

                        </View>
                }

                <StatusBar style="auto" />
            </View>
        </HomeContext.Provider>


    );
}

