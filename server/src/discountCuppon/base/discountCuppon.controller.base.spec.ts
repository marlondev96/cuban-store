import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DiscountCupponController } from "../discountCuppon.controller";
import { DiscountCupponService } from "../discountCuppon.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  dateEnd: new Date(),
  dateStart: new Date(),
  discountByCantity: 42.424242424,
  id: "exampleId",
  percentDiscount: 42.424242424,
  title: "exampleTitle",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  dateEnd: new Date(),
  dateStart: new Date(),
  discountByCantity: 42.424242424,
  id: "exampleId",
  percentDiscount: 42.424242424,
  title: "exampleTitle",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    dateEnd: new Date(),
    dateStart: new Date(),
    discountByCantity: 42.424242424,
    id: "exampleId",
    percentDiscount: 42.424242424,
    title: "exampleTitle",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  dateEnd: new Date(),
  dateStart: new Date(),
  discountByCantity: 42.424242424,
  id: "exampleId",
  percentDiscount: 42.424242424,
  title: "exampleTitle",
  updatedAt: new Date(),
};

const service = {
  createDiscountCuppon() {
    return CREATE_RESULT;
  },
  discountCuppons: () => FIND_MANY_RESULT,
  discountCuppon: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DiscountCuppon", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DiscountCupponService,
          useValue: service,
        },
      ],
      controllers: [DiscountCupponController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /discountCuppons", async () => {
    await request(app.getHttpServer())
      .post("/discountCuppons")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateEnd: CREATE_RESULT.dateEnd.toISOString(),
        dateStart: CREATE_RESULT.dateStart.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /discountCuppons", async () => {
    await request(app.getHttpServer())
      .get("/discountCuppons")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateEnd: FIND_MANY_RESULT[0].dateEnd.toISOString(),
          dateStart: FIND_MANY_RESULT[0].dateStart.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /discountCuppons/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/discountCuppons"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /discountCuppons/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/discountCuppons"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateEnd: FIND_ONE_RESULT.dateEnd.toISOString(),
        dateStart: FIND_ONE_RESULT.dateStart.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /discountCuppons existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/discountCuppons")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateEnd: CREATE_RESULT.dateEnd.toISOString(),
        dateStart: CREATE_RESULT.dateStart.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/discountCuppons")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
