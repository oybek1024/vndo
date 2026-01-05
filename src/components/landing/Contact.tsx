import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button, Form, Input, Select, message } from "antd";
import { useState } from "react";

const { TextArea } = Input;
const { Option } = Select;

interface ContactFormValues {
  name: string;
  email: string;
  role: "consumer" | "supplier" | "other";
  subject: string;
  message: string;
}

export const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: ContactFormValues) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form submitted:", values);
    message.success("Thank you! We'll get back to you soon.");
    form.resetFields();
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: "solar:letter-bold",
      title: "Email",
      content: "contact@vndo.com",
      link: "mailto:contact@vndo.com",
    },
    {
      icon: "solar:phone-bold",
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: "solar:map-point-bold",
      title: "Address",
      content: "123 Business St, Suite 100, City, Country",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              We're Here to Help
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? Want to learn more? Reach out to our team and we'll
            get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="space-y-4"
            >
              <Form.Item
                name="name"
                label="Full Name"
                rules={[
                  { required: true, message: "Please enter your name" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="John Doe"
                  prefix={
                    <Icon
                      icon="solar:user-bold"
                      className="w-4 h-4 text-gray-400"
                    />
                  }
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  size="large"
                  type="email"
                  placeholder="john@example.com"
                  prefix={
                    <Icon
                      icon="solar:letter-bold"
                      className="w-4 h-4 text-gray-400"
                    />
                  }
                />
              </Form.Item>

              <Form.Item
                name="role"
                label="I am a"
                rules={[
                  { required: true, message: "Please select your role" },
                ]}
              >
                <Select size="large" placeholder="Select your role">
                  <Option value="consumer">Hotel / Consumer</Option>
                  <Option value="supplier">Supplier</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="subject"
                label="Subject"
                rules={[
                  { required: true, message: "Please enter a subject" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="How can we help?"
                  prefix={
                    <Icon
                      icon="solar:document-bold"
                      className="w-4 h-4 text-gray-400"
                    />
                  }
                />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please enter your message" },
                  { min: 10, message: "Message must be at least 10 characters" },
                ]}
              >
                <TextArea
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  className="resize-none"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={loading}
                  block
                  icon={<Icon icon="solar:plain-2-bold" className="w-5 h-5" />}
                  className="h-12 bg-gradient-to-r from-blue-600 to-purple-600 border-0 font-semibold"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                      <Icon
                        icon={info.icon}
                        className="w-6 h-6 text-blue-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  <Icon
                    icon="solar:clock-circle-bold"
                    className="w-4 h-4 inline mr-2"
                  />
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

