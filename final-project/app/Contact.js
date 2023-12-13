import React from 'react'
import {
    Typography,
    Card,
    CardBody,
    Input,
    Textarea,
  } from "@material-tailwind/react";
  import PhoneIcon from "@mui/icons-material/Phone";
  import EmailIcon from "@mui/icons-material/Email";
function Contact() {
  return (
   
    <section className="px-8 py-16">
    <div className="container mx-auto mb-20 text-center">
      <Typography variant="h1" color="blue-gray" className="mb-4">
        Contact Us
      </Typography>
      <Typography
        variant="lead"
        className="mx-auto w-full lg:w-5/12 !text-gray-500"
      >
        Feel free to reach out through the contact form,
      </Typography>
    </div>
    <div>
      <Card
        shadow={true}
        className="container mx-auto border border-gray/50"
      >
        <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
          <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
            <Typography variant="h4" color="white" className="mb-2">
              Contact Information
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto mb-8 text-base !text-gray-500"
            >
              Fill up the form and our Team will get back to you within 24
              hours.
            </Typography>
            <div className="flex gap-5">
              <PhoneIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2">
                +962790948298
              </Typography>
            </div>
            <div className="flex my-2 gap-5">
              <EmailIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2">
                OmarMohsin112@mail.com
              </Typography>
            </div>
          </div>
          <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
            <div>
              <div className="mb-8 grid gap-4 lg:grid-cols-2">
                <div className="mb-3 md:mb-0">
                  <label
                    className="block text-gray-500 text-sm mb-2"
                    htmlFor="first-name"
                  >
                    First Name
                  </label>
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    name="first-name"
                    placeholder="eg. Lucas"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-2">
                    Last Name
                  </label>
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    name="first-name"
                    placeholder="eg. Lucas"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
              </div>

              <label
                className="block text-gray-500 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                color="gray"
                size="lg"
                variant="static"
                name="email"
                placeholder="eg. lucas@mail.com"
                containerProps={{
                  className: "!min-w-full mb-8 focus:border-none", // Add focus:border-none here
                }}
              />

              <label>Message</label>
              <Textarea
                color="gray"
                size="lg"
                variant="static"
                name="message"
                containerProps={{
                  className: "!min-w-full mb-8 p-2 focus:border-none",
                }}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  </section>
  )
}

export default Contact