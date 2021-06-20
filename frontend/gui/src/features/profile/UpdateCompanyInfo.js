import React from 'react';
import {
  Modal,
  Button,
  Form,
  Input,
  Select,
} from 'antd';
import { connect } from 'react-redux';
import { update_CompanyInfo } from '../../store/actions/auth';
import { withRouter } from 'react-router-dom';
import { createMessage } from '../../store/actions/messages';

const { Option } = Select;

class UpdateCompanyInfo extends React.Component {
    state = {
      loadings: [],
      ModalText: 'CompanyInfo',
      visible: false,
      confirmLoading: false,

       user_ID:"",
       website:" ",
       company_name: " ",
       work_fields : " ",
       address_line : " ",
       zip_code : " ",
       state : " ",
       country : " ",

    };

    showModal = () => {
      this.setState({
        visible: true,
        website: this.props.website,
        user_ID: this.props.userID,
        company_name : this.props.company_name,
        work_fields: this.props.work_fields,
        address_line: this.props.address_line,
        zip_code: this.props.zip_code,
        state: this.props.state,
        country: this.props.country,
      });
    };

    handleOk = () => {
      this.setState({
        ModalText: 'The modal will be closed after two seconds',
        confirmLoading: true,
      });
      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 2000);
    };

    handleCancel = () => {
      console.log('Clicked cancel button');
      this.setState({
        visible: false,
      });
    };

    onSubmit = (e) => {
      //e.preventDefault();
      this.setState({
        ModalText: 'The modal will be closed after two seconds',
        confirmLoading: true,
      });
      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 2000);
      const {
        user_ID,
        website,
        company_name,
        work_fields,
        address_line,
        zip_code,
        state,
        country,
        } = this.state;
        const update = {
          user_ID,
          website,
          company_name,
          work_fields,
          address_line,
          zip_code,
          state,
          country,
        };
        this.props.update_CompanyInfo(update);
        this.props.createMessage({ updateSuccesfull: 'Update succesfull' });
      };

      enterLoading = index => {
        this.setState(({ loadings }) => {
          const newLoadings = [...loadings];
          newLoadings[index] = true;

          return {
            loadings: newLoadings,
          };
        });
        setTimeout(() => {
          this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = false;

            return {
              loadings: newLoadings,
            };
          });
        }, 6000);
      };

    onCheckBoxChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
    }

    handleWorkSelectChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({
            work_fields: `${value}`
        });

    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleChange = (value) => {
      console.log(`selected ${value}`);
    };
    render() {
      const { visible, confirmLoading } = this.state;
      const { loadings } = this.state;
      return (
        <>
          <Button type="primary" onClick={this.showModal}>
            Edit
          </Button>
          <Modal
            title="Company Info"
            visible={visible}
            onCancel={this.handleCancel}
            onOk={this.handleOk}
            width="70%"
            confirmLoading={confirmLoading}
            footer=" "
          >
          <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onSubmit}
          validateMessages={this.validateMessages}>
            <Form.Item
              name={['comapany_name', 'name']}
              label="Comapany"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="comapany_name"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.company_name}

               />
            </Form.Item>
            <Form.Item
              name={['work_fields', 'name']}
              label="Work fields:"
              rules={[
                {
                  required: false,
                },
              ]}
            >
                <Select
                    name= "work"
                    showSearch
                    size="large"
                    placeholder="Select a field"
                    optionFilterProp="children"
                    onSearch={this.onSearch}
                    onChange={this.handleWorkSelectChange}
                    defaultValue={this.props.work_fields}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value=" ">none</Option>
                    <Option value="RIGGING">Rigging</Option>
                    <Option value="MODELLING">Modeling</Option>
                    <Option value="VFX">Visual effects</Option>
                    <Option value="TEXTURING">Texturing</Option>
                    <Option value="ANIMATION">Animation</Option>
                    <Option value="FILM">Film and Media Arts</Option>
                    <Option value="GAME_DESIGN">Games design</Option>
                    <Option value="RENDERING">Rendering artist</Option>
                    <Option value="LIGHTNING">Lightning artist</Option>
                    <Option value="BACKGROUND">Background artist</Option>
                    <Option value="GRAPHIC_DESING">Graphic design</Option>
                    <Option value="PRODUCT_DESIGN">Product design</Option>
                    <Option value="CHARACTER_DESIGN">Character design</Option>
                    <Option value="WEBSITE_DESIGNER">3D website design</Option>
                    <Option value="INTERACTIVE_DESIGN">Interactive design</Option>
                    <Option value="CHARACTER_ANIMATATION">Character Animation</Option>
                </Select>
            </Form.Item>
            <Form.Item
              name={['website', 'name']}
              label="Website"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="website"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.website}

               />
            </Form.Item>
            <Form.Item
              name={['address_line', 'name']}
              label="Address "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="address_line"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.address_line}

               />
            </Form.Item>
            <Form.Item
              name={['zip_code', 'name']}
              label="Zip code"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="zip_code"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.zip_code}

               />
            </Form.Item>
            <Form.Item
              name={['state', 'name']}
              label="State "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="state"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.state}

               />
            </Form.Item>
            <Form.Item
              name={['country', 'name']}
              label="Country "
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                size="large"
                type="text"
                name="country"
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.props.country}

               />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button style={{marginRight:"10px"}} type="primary" htmlType="submit" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                Update
              </Button>
              <Button onClick={this.handleCancel}>
                Cancel
              </Button>
            </Form.Item>
            </Form>
          </Modal>
        </>
      );
    };
}

  const mapStateToProps = (state) => ({
    userData: state.auth,
  });

export default withRouter(connect(mapStateToProps, { update_CompanyInfo, createMessage })(UpdateCompanyInfo));

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },

};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 3,
    },
    sm: {
      span: 16,
      offset: 18,
    },
  },
};