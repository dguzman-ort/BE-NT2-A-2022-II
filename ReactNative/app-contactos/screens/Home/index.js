import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import styles from "./styles";

import contactService from "../../services/contacts";
import ContactScrollView from '../../components/ContactScrollView';
import { useEffect, useState } from 'react';
import ContactFlatList from '../../components/ContactFlatList';

export default function Home() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        // Se supone que acá tengo que ir a buscar la informacion en la API
        // fetch contactos
        contactService.getContacts().then(data => {
            setContacts(data)
        })

    }, [])
  
    return (
      
        <View style={styles.container}>
          
          {/* <ContactScrollView contacts={contacts} /> */}
          <ContactFlatList contacts={contacts} />
  
  
          <StatusBar style="auto" />
        </View>
      
  
    );
  }
  
  