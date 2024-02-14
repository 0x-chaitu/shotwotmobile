// form
import React from 'react';
import type { UseFormReturn } from 'react-hook-form';
import { FormProvider as Form } from 'react-hook-form';
import { ScrollViewProps, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
    children: React.ReactNode;
    methods: UseFormReturn<any>;
    style?: ScrollViewProps['style'];
};

export default function FormProvider({
    children,
    methods,
    style,
}: Props) {
    return (
        <Form {...methods}>
            <ScrollView contentContainerStyle={[styles.container, style]}>
                {children}
            </ScrollView>
        </Form>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
});