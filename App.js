import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Divider } from 'react-native-elements';

export default function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchSpells();
	}, []);

	const fetchSpells = async () => {
		try {
			const response = await fetch('./spells.json');
			const json = await response.json();
			setData(json);
		} catch (error) {
			console.error(error);
		}
	};

	const tableHead = ['Name', 'Description', 'Level', 'Range', 'Components', 'Duration', 'Casting Time', 'Ritual', 'School', 'Type', 'Tags', 'Classes', 'Higher Levels'];

	return (
		<ScrollView style={styles.container}>
			{data.map((spell, index) => {
				const components = Object.entries(spell.components)
					.map(([key, value]) => `${key}: ${value}`)
					.join(', ');

				const spellData = { ...spell, components };

				return (
					<View key={index}>
						<Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
							<Row data={tableHead} style={styles.head} textStyle={styles.text}/>
							<Row data={Object.values(spellData)} textStyle={styles.text}/>
						</Table>
						<Divider style={{ backgroundColor: 'blue' }} />
					</View>
				);
			})}
			<StatusBar style="auto" />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	head: { height: 40, backgroundColor: '#f1f8ff' },
	text: { margin: 6 },
});
