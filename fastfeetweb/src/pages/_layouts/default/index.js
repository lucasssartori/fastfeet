/* eslint-disable react/prop-types */
import React from 'react';
import ProtoTypes from 'prop-types';
import { Wrapper } from './styles';
import Header from '../../../components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}{' '}
    </Wrapper>
  );
}

DefaultLayout.protoTypes = {
  children: ProtoTypes.element.isRequired,
};
