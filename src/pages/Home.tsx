import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
} from '@nextui-org/react';

function Home() {
  return (
    <>
      <div className="w-full space-y-8 px-8 py-8 sm:space-y-12 sm:px-32 sm:py-32">
        <h1 className="w-2/3 text-3xl font-semibold leading-tight sm:text-6xl">
          Word lid van de leukste jeugdbeweging van Houthulst
        </h1>
        <p className="sm:text-xl">
          De Chiro staat voor leuke avonturen en levenslange vriendschappen
        </p>
        <Button className="bg-gray-900" size="lg">
          Inschrijven voor het Chirojaar
        </Button>
      </div>
      <Image
        className="w-screen object-cover sm:h-96"
        src="/images/309304541_466293492191363_7096908935596833318_n.jpg"
        radius="none"
      />
      <div className="w-full space-y-8 px-8 py-8 sm:px-32 sm:py-16">
        <h2 className="text-3xl font-semibold sm:text-4xl">Over ons</h2>
        <p className="">
          Chiro Sint-Jan Houthulst is de lokale Chirobeweging in Houthulst. Met
          een rijke geschiedenis en een sterke leidingsploeg zorgen we voor
          leuke zondagen en onvergetelijke kampen. We zijn een Chiro voor
          jongens en meisjes van 6 tot 18 jaar. Elke zondag staan we klaar om
          jullie een leuke namiddag te bezorgen. We spelen spelletjes, doen
          toffe activiteiten en maken er een leuke boel van. We zijn een
          Chirogroep die openstaat voor iedereen. Word lid van de leukste
          jeugdbeweging van Houthulst en omstreken!
        </p>
      </div>
      <Divider />
      <div className="w-full space-y-8 px-8 py-8 sm:px-32 sm:py-16">
        <h2 className="text-3xl font-semibold sm:text-4xl">Evenementen</h2>
        <div className="grid justify-center gap-10 sm:grid-cols-2 sm:grid-rows-2">
          <Card className="bg-gray-900">
            <CardHeader className="flex-col !items-start gap-4">
              <h3 className="text-2xl font-bold">Jeugddag</h3>
              <p className="text-tiny font-bold uppercase">17 september</p>
            </CardHeader>
            <Image
              alt="Card background"
              className="h-full w-full object-cover"
              src="/images/312054780_491845939636118_866673602771295618_n.jpg"
              radius="none"
            />
            <CardBody>
              <p>Het kamp gaat door van 21 juli tot 31 juli in Opoeteren.</p>
            </CardBody>
          </Card>
          <Card className="bg-gray-900">
            <CardHeader className="flex-col !items-start gap-4">
              <h3 className="text-2xl font-bold">Startdag</h3>
              <p className="text-tiny font-bold uppercase">17 september</p>
            </CardHeader>
            <Image
              alt="Card background"
              className="h-full w-full object-cover"
              src="/images/312054780_491845939636118_866673602771295618_n.jpg"
              radius="none"
            />
            <CardBody>
              <p>Het kamp gaat door van 21 juli tot 31 juli in Opoeteren.</p>
            </CardBody>
          </Card>
          <Card className="bg-gray-900">
            <CardHeader className="flex-col !items-start gap-4">
              <h3 className="text-2xl font-bold">Dia-avond</h3>
              <p className="text-tiny font-bold uppercase">17 september</p>
            </CardHeader>
            <Image
              alt="Card background"
              className="h-full w-full object-cover"
              src="/images/312054780_491845939636118_866673602771295618_n.jpg"
              radius="none"
            />
            <CardBody>
              <p>Het kamp gaat door van 21 juli tot 31 juli in Opoeteren.</p>
            </CardBody>
          </Card>
          <Card className="bg-gray-900">
            <CardHeader className="flex-col !items-start gap-4">
              <h3 className="text-2xl font-bold">Dia-avond</h3>
              <p className="text-tiny font-bold uppercase">17 september</p>
            </CardHeader>
            <Image
              alt="Card background"
              className="h-full w-full object-cover"
              src="/images/312054780_491845939636118_866673602771295618_n.jpg"
              radius="none"
            />
            <CardBody>
              <p>Het kamp gaat door van 21 juli tot 31 juli in Opoeteren.</p>
            </CardBody>
          </Card>
        </div>
      </div>
      <Divider />
      <div className="w-full space-y-8 px-8 py-8 sm:px-32 sm:py-16">
        <h2 className="text-3xl font-semibold sm:text-4xl">Briefjes</h2>
        <p>Hier vind je alle laatste briefjes en mededelingen.</p>
        <div className="grid justify-center gap-10 sm:grid-cols-2 sm:grid-rows-2">
          <Card className="bg-gray-900">
            <CardHeader className="flex-col !items-start gap-4">
              <h3 className="text-2xl font-bold">Jeugddag</h3>
              <p className="text-tiny font-bold uppercase">17 september</p>
            </CardHeader>
            <CardBody>
              <p>Het kamp gaat door van 21 juli tot 31 juli in Opoeteren.</p>
            </CardBody>
          </Card>
          <Card className="bg-gray-900">
            <CardHeader className="flex-col !items-start gap-4">
              <h3 className="text-2xl font-bold">Jeugddag</h3>
              <p className="text-tiny font-bold uppercase">17 september</p>
            </CardHeader>
            <CardBody>
              <p>Het kamp gaat door van 21 juli tot 31 juli in Opoeteren.</p>
            </CardBody>
          </Card>
          <Card className="bg-gray-900">
            <CardHeader className="flex-col !items-start gap-4">
              <h3 className="text-2xl font-bold">Jeugddag</h3>
              <p className="text-tiny font-bold uppercase">17 september</p>
            </CardHeader>
            <CardBody>
              <p>Het kamp gaat door van 21 juli tot 31 juli in Opoeteren.</p>
            </CardBody>
          </Card>
          <Card className="bg-gray-900">
            <CardHeader className="flex-col !items-start gap-4">
              <h3 className="text-2xl font-bold">Jeugddag</h3>
              <p className="text-tiny font-bold uppercase">17 september</p>
            </CardHeader>
            <CardBody>
              <p>Het kamp gaat door van 21 juli tot 31 juli in Opoeteren.</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
