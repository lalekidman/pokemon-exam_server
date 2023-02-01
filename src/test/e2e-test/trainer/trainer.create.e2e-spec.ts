// import faker from 'faker'

import {
  makeTrainerCreateUsecase
} from '@app/domain/trainer/usecases/create'
import { TestRepositoryGateway } from '@app/test/helpers/repository-gateway.test'
const TrainerCreateUsecase = makeTrainerCreateUsecase({
  repositoryGateway: new TestRepositoryGateway()
})
describe("create trainer", () => {
  
  it ("should success. all valid data", async () => {
    const dataInput = {
      firstName: "John",
      // firstName: faker.name.firstName(),
      lastName: "Doe"
    }
    const currentTime = Date.now()
    const trainer = await new TrainerCreateUsecase().execute(dataInput)

    expect(trainer).toHaveProperty("id")
    expect(trainer.id).toBeString()

    expect(trainer).toHaveProperty("firstName")
    expect(trainer.firstName).toBeString()
    expect(trainer.firstName).toEqual(dataInput.firstName)

    expect(trainer).toHaveProperty("lastName")
    expect(trainer.lastName).toBeString()
    expect(trainer.lastName).toEqual(dataInput.lastName)

    expect(trainer).toHaveProperty("suspended")
    expect(trainer.suspended).toBeBoolean()
    expect(trainer.suspended).toEqual(false)

    expect(trainer).toHaveProperty("suspendedAt")
    expect(trainer.suspendedAt).toBeNumber()
    expect(trainer.suspendedAt).toEqual(0)

    expect(trainer).toHaveProperty("createdAt")
    expect(trainer.createdAt).toBeNumber()
    expect(trainer.createdAt).toBeGreaterThanOrEqual(currentTime)

    expect(trainer).toHaveProperty("updatedAt")
    expect(trainer.updatedAt).toBeNumber()
    expect(trainer.updatedAt).toBeGreaterThanOrEqual(currentTime)
  })
  it ("should failed. set `firstName` property to empty string.", async () => {
    const dataInput = {
      firstName: "",
      // firstName: faker.name.firstName(),
      lastName: "Doe"
    }
    try {
      const trainer = await new TrainerCreateUsecase().execute(dataInput)
      expect(true).toBeFalse()
    } catch (error) {
      console.log("ERROR: ", error)
      expect(false).toBeFalse()
    }
  })
}) 