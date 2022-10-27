import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Contact from '../../components/Contact';

export default function ContactScrollView({ contacts }) {

  //console.log(contacts);

  return (
    <ScrollView>
        {
          contacts.map(contact => {
            return <Contact key={contact.id} contact={contact}  />
          })
        }
    </ScrollView>

  );
}
