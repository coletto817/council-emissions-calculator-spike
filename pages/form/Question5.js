import { useState } from "react";
<<<<<<< HEAD
import { Heading, Text, Select, Grid } from "@chakra-ui/react";
||||||| c25ef86
import { Heading, Text, Select } from "@chakra-ui/react";
=======
import { Heading, Text, Select, Stack, Grid } from "@chakra-ui/react";
>>>>>>> upstream/main
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/FormProvider";
import { departments } from "../../utils/constants";
<<<<<<< HEAD
import {
  BackButton,
  SubmitButton,
} from "../../components/LinkButton/LinkButton";
||||||| c25ef86
import LinkButton from "../../components/LinkButton/LinkButton";
=======
import LinkButton from "../../components/LinkButton/LinkButton";
import {
  BackButton,
  ContinueButton,
  SubmitButton,
} from "../../components/LinkButton/LinkButton";
>>>>>>> upstream/main
import capitalize from "../../utils/capitalize";
import Q5Progress from "../../public/images/progress-bar/q5-progress-bar.svg";
import { sendFormResponse } from "../../utils/dbApi";

export default function Question5() {
  const { answers, setAnswers } = useForm();
  const [department, setDepartment] = useState(answers.department);

<<<<<<< HEAD
  const saveAnswers = () => setAnswers((prev) => ({ ...prev, department }));

||||||| c25ef86
=======
  const saveAnswers = () => setAnswers((prev) => ({ ...prev, department }));
>>>>>>> upstream/main
  return (
    <Layout>
      <Q5Progress />
<<<<<<< HEAD
||||||| c25ef86
      <Heading>Question 5/5</Heading>
=======

>>>>>>> upstream/main
      <Text textAlign="center">
        <br />
        <Heading as="h1" size="md" mt={20}>
          Which department do you work for?
        </Heading>
      </Text>
      <Select
        mt={8}
        maxW={280}
        placeholder="Choose Your Department"
        onChange={(e) => setDepartment(e.target.value)}
      >
        {departments.map((department) => (
          <option
            key={department}
            value={department}
            selected={department === answers.department}
          >
            {capitalize(department)}
          </option>
        ))}
      </Select>
<<<<<<< HEAD
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <BackButton href="/form/Question4" onClick={saveAnswers} />
        <SubmitButton
          href="../results"
          disabled={!department}
          onClick={() =>
            setAnswers((prev) => {
              const response = { ...prev, department };
              //console.log(`form 5 updates: ${JSON.stringify(response)}`);
              sendFormResponse(response);
              return response;
            })
          }
        />
      </Grid>
||||||| c25ef86
      <LinkButton
        href="/results"
        disabled={!department}
        onClick={() => 
          setAnswers((prev) => {
            const response = { ...prev, department };
            //console.log(`form 5 updates: ${JSON.stringify(response)}`);
            sendFormResponse(response);
            return response;
          })
        }
      >
        Calculate!
      </LinkButton>
=======
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <BackButton href="/form/Question4" onClick={saveAnswers} />
        <SubmitButton
          href="/results"
          disabled={!department}
          onClick={() =>
            setAnswers((prev) => {
              const response = { ...prev, department };
              //console.log(`form 5 updates: ${JSON.stringify(response)}`);
              sendFormResponse(response);
              return response;
            })
          }
        />
      </Grid>
>>>>>>> upstream/main
    </Layout>
  );
}
