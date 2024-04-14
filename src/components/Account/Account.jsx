import Services from "../General/Services";
import PropTypes from "prop-types";
import NewProfile from './NewProfile'

const Account = ({data}) => {
  return (
    <>
      <NewProfile />
      <Services data={data.sections.footer}/>
    </>
  )
}

export default Account

Account.propTypes = {
  data: PropTypes.object.isRequired,
};