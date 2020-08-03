import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HomeTemplate from '../../components/templates/HomeTemplate';
import homeFetch from '../../store/actions/HomeActions';
import routesName from '../../constants/routes';

export const HomeScreen = (props) => {
  const { data, fetchData, userId, navigation } = props;

  useEffect(() => {
    fetchData(userId);
  }, [fetchData, userId]);

  return (
    <HomeTemplate
      data={data}
      onClick={(item) => navigation.push(routesName.Details, { item })}
    />
  );
};

const mapStateToProps = ({ home: { data } }) => {
  return { data };
};

const mapDispatchToProps = {
  fetchData: homeFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
